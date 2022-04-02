import React, {ChangeEvent, useEffect} from "react";
import style from "./SetCounter.module.css"
import {Button} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {
    selectorSetCounterState,
    setActiveBtnAC,
    setMaxCounterAC,
    setMinCounterAC,
    StateSetCounterType
} from "../../redux/setCounterReducer";
import {RootStateType} from "../../redux/store";

export type SetCounterPropsType = {
    editMode: boolean
    setEditMode: (editeMode: boolean) => void
    onClickSetCounterValue: (maxCounter: number, minCounter: number) => void
    setIncorrectValue: (edit: boolean) => void
}

export const SetCounter = (props: SetCounterPropsType) => {

    const dispatch = useDispatch();

    let {
        maxCounter,
        minCounter,
        btnActive,
    } = useSelector<RootStateType, StateSetCounterType>(state => state.setCounter)

    const onClickSetCounter = () => {
        if (maxCounter > minCounter && maxCounter > -1 && minCounter > -1) {
            props.onClickSetCounterValue(minCounter, maxCounter);
            dispatch(setActiveBtnAC(false));
        } else {
            dispatch(setActiveBtnAC(true));
        }

        console.log('onClickSetCounter');
    }


    useEffect(() => {
        if (maxCounter > minCounter && maxCounter > -1 && minCounter > -1) {
            props.setIncorrectValue(false);
        } else {
            props.setIncorrectValue(true);
        }
    }, [maxCounter, minCounter])


    useEffect(() => {
    	let startValue = localStorage.getItem("startValue");
    	let localStartValue = JSON.parse(startValue ? startValue : "0");
    	let maxValue = localStorage.getItem("maxValue");
    	let localMaxValue = JSON.parse(maxValue ? maxValue : "5");
        dispatch(setMinCounterAC(localStartValue));
        dispatch(setMaxCounterAC(localMaxValue));

    },[])


    const onClickHandlerMaxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true);
        dispatch(setActiveBtnAC(false));
        dispatch(setMaxCounterAC(Number(e.currentTarget.value)));
    }

    const onClickHandlerMinCounter = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true);
        dispatch(setActiveBtnAC(false));
        dispatch(setMinCounterAC(Number(e.currentTarget.value)));
    }


    return (
        <div className={style.counter}>
            <div className={style.setCounter}>
                <div className={style.box}>
                    <div>max value:</div>
                    <div className={style.setInput}>
                        <input type={'number'} value={maxCounter} onChange={onClickHandlerMaxCounter}/>
                    </div>
                </div>
                <div className={style.box}>
                    <div>min value:</div>
                    <div className={style.setInput}>
                        <input type={'number'} value={minCounter} onChange={onClickHandlerMinCounter}/>
                    </div>
                </div>
            </div>
            <div>
                <Button
                    title={"set"}
                    style={style.setButton}
                    disabled={btnActive}
                    callback={onClickSetCounter}/>
            </div>
        </div>
    )
}