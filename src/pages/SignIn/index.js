import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Lottie from 'lottie-react-native';

import money from '../../../money.json';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText,AreaLink} from './styles';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn,loadingAuth } = useContext(AuthContext);


  function handleLogin(){
    signIn(email, password);
  }

 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo source={require('../../assets/Logo.png')}/>
        
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

      <SubmitButton onPress={handleLogin}>
      {
        loadingAuth ? (
          <Lottie resizeMode="contain" autoSize source={money} autoPlay loop />
        ) :
        (
        <SubmitText>Acessar</SubmitText>
        )
      }
        
      </SubmitButton>
      
      <AreaLink>
        <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
        <Link>
          <LinkText>Esqueceu a Senha?</LinkText>
        </Link>
      
      </AreaLink>
     

      </Container>
   </Background>
  );
}
