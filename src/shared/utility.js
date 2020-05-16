export function updatedObject(oldObject, updatedPropreties) {
    return {
        ...oldObject,
        ...updatedPropreties
    };
};