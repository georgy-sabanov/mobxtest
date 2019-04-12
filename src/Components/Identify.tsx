import React, { FC } from "react";
import { IdentifyB2C } from "./IdentifyB2C";
import { ModelData } from "../Stores/ModelStore";
import { IdentifyModelData } from "../Models/IdentifyModel";
import { observer } from "mobx-react";

export interface IdentifyProps{
    modelStore: ModelData,
    identifyModel: IdentifyModelData,
}

const IdentifyComponent: FC<IdentifyProps> = props => {
    
    return (
      <div>
        <button>B2C</button><button>B2B</button>
        <IdentifyB2C identifyB2CModel={props.identifyModel.identifyB2C} identify={props.modelStore.identify1} />
      </div>
    )
  }

export const Identify = observer(IdentifyComponent);