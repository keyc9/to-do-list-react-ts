import { useState } from 'react';
import { FromControl, FormBlock, FormField, FromLabel, FromWrapper } from './Form.styled';

import plusItem from '../../assets/images/plus.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Form = (props: { createNewToDo: Function }) => {

const theme = useSelector((state: RootState) => state.themeList.theme)
    

    const [text, setText] = useState<string>('')

    const formSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (text) {
            props.createNewToDo(text);
            setText('')
        }
    }

    // const changeText = (e: ChangeEvent<HTMLInputElement>) => {}

    return (
        <FromWrapper theme={theme}>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FromLabel>
                    <FormField value={text} type="text" onChange={(e) => setText(e.target.value)} />
                    <FromControl icon={plusItem}/>
                </FromLabel>
            </FormBlock>
        </FromWrapper>
    )
}