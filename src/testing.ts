import { vi, type Mock } from "vitest";

export type Mocked<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any ? Mock<T[P]> : T[P];
};

export function spyAllMethodsOf<T extends object>(element: T): Mocked<T> {
    for (const key in element) {
        if (typeof element[key] === "function") {
            (element as any)[key] = vi.fn();
        }
    }

    // 2. Spy on methods defined on the class prototype
    const proto = Object.getPrototypeOf(element);
    if (proto && proto !== Object.prototype) {
        const methodNames = Object.getOwnPropertyNames(proto);
        for (const key of methodNames) {
            if (key !== 'constructor' && typeof (element as any)[key] === 'function') {
                // We create a mock on the instance that "shadows" the prototype method
                (element as any)[key] = vi.fn();
            }
        }
    }

    return element as unknown as Mocked<T>;
}