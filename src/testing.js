import {vi} from "vitest";

export function spyAllMethodsOf(element){
    for (const property in element) {
        if (typeof element[property] == "function") {
            element[property] = vi.fn();
        }
    }
}