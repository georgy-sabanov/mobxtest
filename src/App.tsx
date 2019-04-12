import React, { FC } from 'react';
import { ModelData } from './Stores/ModelStore';
import './App.css';
import { observer } from 'mobx-react';
import { Identify } from './Components/Identify';
import { IdentifyModel, IdentifyModelData } from './Models/IdentifyModel';

interface AppProps {
  modelStore: ModelData
}

const AppComponent: FC<AppProps> = props => {  
  console.log(props.modelStore.email);
  return (
    <div>
      <button onClick={()=> props.modelStore.toggleShow()}>Toggle</button>
       { props.modelStore.show ? 
       <Identify identifyModel={IdentifyModel.create({ email: props.modelStore.email })} modelStore={props.modelStore} />:
       <div>lelelele</div> }
    </div>
  )
}

export const App = observer(AppComponent);