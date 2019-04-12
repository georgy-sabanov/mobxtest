import React, { FC, ChangeEvent } from "react";
import { IdentifyB2CModelData } from "../Models/IdentifyModel";
import { observer } from "mobx-react";

export interface IdentifyB2CProps{
    identifyB2CModel: IdentifyB2CModelData,
    identify(data: { email: string, postalCode: string }):void; 
}

const IdentifyB2CComponent: FC<IdentifyB2CProps> = props => {
    const model = props.identifyB2CModel;
    const setEmail = (e: ChangeEvent<HTMLInputElement>)=> {
        model.setEmail(e.target.value);
    }
    const setPostalCode = (e: ChangeEvent<HTMLInputElement>)=> {
        model.setPostalCode(e.target.value);
    }
    return (
      <div>
        <input value={model.getEmail()} onChange={setEmail} type="text"/>
        <input value={model.postalCode} onChange={setPostalCode} type="text" />
        <button onClick={()=> props.identify({ email: model.email, postalCode: model.postalCode })}>Identify</button>
      </div>
    )
  }

  export const IdentifyB2C = observer(IdentifyB2CComponent);