import React, {useState} from 'react';
import { Content, Form, Item, Input,Text, H3,Body,Header} from 'native-base';


export default function MyForm() {
  
  const [name, setName] = useState("")
   
   
  

    const newLocal = <H3>What's your Name ?</H3>;
  return (
    <Content>
      <Header style={{backgroundColor:'white'}}>
        <Body style={{alignItems:'center', backgroundColor:'white'}}>
          <Text>Questão 2</Text>
          </Body>
      </Header>
         <Text>{newLocal}</Text>
         <Content>
        <Form>
            <Item>
                <Input placeholder="Say your name here" onChangeText={text => setName(text)} value={name}/>
            </Item>
                             
        </Form>
        <Text>
            Your name is: {name}            
        </Text>
        </Content>
    </Content>
  );
  }