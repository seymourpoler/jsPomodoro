import { vi, type Mock } from "vitest";

export type Mocked<T> = T & {
    [P in keyof T]: T[P] extends (...args: any[]) => any ? Mock<T[P]> : T[P];
};

export function spyAllMethodsOf<T extends object>(element: T): void {
    let currentProto = Object.getPrototypeOf(element);

    // We climb the prototype chain until we hit the base Object
    while (currentProto && currentProto !== Object.prototype) {
        const propertyNames = Object.getOwnPropertyNames(currentProto);

        for (const name of propertyNames) {
            if (name === 'constructor') continue;

            const descriptor = Object.getOwnPropertyDescriptor(currentProto, name);

            // Check if it's a function and not already mocked on the instance
            if (typeof descriptor?.value === 'function' && !Object.prototype.hasOwnProperty.call(element, name)) {
                // Use defineProperty to avoid "Invalid assignment target" errors
                Object.defineProperty(element, name, {
                    value: vi.fn(),
                    writable: true,
                    configurable: true,
                    enumerable: true
                });
            }
        }
        currentProto = Object.getPrototypeOf(currentProto);
    }
}