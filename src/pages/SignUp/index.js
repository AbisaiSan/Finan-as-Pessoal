import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import Lottie from 'lottie-react-native';

import money from '../../../money.json';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText} from '../SignIn/styles';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome);
  }
 
 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >

        <AreaInput>
          <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={true}
          />
        </AreaInput>

      <SubmitButton onPress={handleSignUp}>

      {
        loadingAuth ? (
          <Lottie resizeMode="contain" autoSize source={money} autoPlay loop />
        ) :
        (
          <SubmitText>Cadastrar</SubmitText>
        )
      }
        
      </SubmitButton>

      </Container>
   </Background>
  );
}