import { ModelData } from "../Stores/ModelStore";

export const ModelService = {
    identify1: (data: {email: string, postalCode: string}) => {
        return new Promise<{}>((resolve)=> {
            resolve({ firstName: "MrF", email: "lalalal@test.com" });
        })
    }
}