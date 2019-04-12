import { types, flow, applySnapshot, Instance } from "mobx-state-tree";
import { ModelService } from "../Services/ModelService";


export const ModelStore = types
    .model("ModelStore", {
        firstName: types.optional(types.string, () => ""),
        email: types.optional(types.string, () => ""),
        show: types.optional(types.boolean, ()=> true)
    })
    .actions(self => ({
        identify1: flow(function* identify(data: { email: string, postalCode: string }) {
            const result = yield ModelService.identify1(data);
            applySnapshot(self, result);
            self.show = false;
        }),
        toggleShow: () => {
            self.show = !self.show;
        }
    }))

export type ModelData = Instance<typeof ModelStore>;