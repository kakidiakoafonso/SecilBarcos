import React, { ReactNode } from 'react'
import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native'
import cores from '../../utils/style/cores'

type Props = {
    children:ReactNode
}
export default function KeyBoardAvoidWrapper({children}:Props) 
{
    return (
        <KeyboardAvoidingView behavior='height' style={{flex:1, backgroundColor:cores.primarary40}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
