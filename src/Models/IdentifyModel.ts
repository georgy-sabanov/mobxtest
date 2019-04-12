import { types, flow, applySnapshot, Instance, getParent } from "mobx-state-tree";
import { ModelService } from "../Services/ModelService";

const IdentifyShared = types.model({}).views(self => {
    return {
        get email(): string {
            return getParent<IdentifyModelData>(self).email;
        },
        get postalCode(): string {
            return getParent<IdentifyModelData>(self).postalCode;
        },
        getEmail() {
            return getParent<IdentifyModelData>(self).email;
        }
    }
}).actions(self=> ({
    setEmail(email: string) {
        getParent<IdentifyModelData>(self).setEmail(email);
    },
    setPostalCode(postalCode: string) {
        getParent<IdentifyModelData>(self).setPostalCode(postalCode);
    }
}));


export const IdentifyB2CModel = types.compose(
    types.model("IdentifyB2CModel", {}).volatile(self=> ({
        nationalId: ""
    })).actions(self => ({
        setNationalId(nationalId: string){
            self.nationalId = nationalId;
        }
    })), IdentifyShared);
export type IdentifyB2CModelData = Instance<typeof IdentifyB2CModel & typeof IdentifyShared>;
   
interface IdentifyModelVolatile {
    email: string,
    postalCode: string,
    mode: "b2b" | "b2c"
}

export const IdentifyModel = types
    .model("IdentifyModel", {
        email: types.optional(types.string, ()=> ""),
        postalCode: types.optional(types.string, ()=> ""),
        mode: types.optional(types.string, ()=> "b2c"),
        identifyB2C: types.optional(IdentifyB2CModel, ()=> {})
    })
    // .volatile<IdentifyModelVolatile>(self=> ({
    //     email: "",
    //     postalCodebuggede: "",
    //     mode: "b2c",
    // }))
    .actions(self => ({
        identify1: flow(function* identify(data: { email: string, postalCode: string }) {
            const result = yield ModelService.identify1(data);
            applySnapshot(self, result);
        }),
        setEmail(email: string) {
            self.email = email;
        },
        setPostalCode(postalCode: string) {
            self.postalCode = postalCode;
        }
    }))


export type IdentifyModelData = Instance<typeof IdentifyModel>;