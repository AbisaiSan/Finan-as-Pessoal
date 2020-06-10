
import styled from 'styled-components/native';


export const Background = styled.View`
  flex:1;
  background-color:#131313;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;
`;


export const AreaInput = styled.View`
flex-direction:row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
background: rgba(0,0,0,0.20);
width:90%;
font-size:18px;
color:#ffffff;
margin-bottom:15px;
padding:10px;
border-radius:6;
`;

export const ButtonSubmit = styled.TouchableOpacity`
align-items:center;
justify-content:center;
width:90%;
height:45px;
background-color:#207236;
border-radius:6;
margin-top:10px;
`;

export const TextSubmit = styled.Text`
text-align:center;
font-size:22px;
color:#FFFFFF;
`;



