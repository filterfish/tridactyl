import { hasModifiers } from "../keyseq"

// Placeholder - should be moved into generic parser
export function parser(keys) {
    const response = { keys: [], exstr: undefined }
    const key = keys[0]
    if (!hasModifiers(key)) {
        if (key.key === "Escape") {
            return { keys: [], exstr: "unfocus" }
        }
    } else if (key.key === "e" && key.ctrlKey)
        return { keys: [], exstr: "editor" }
    return { keys: [], exstr: undefined }
}
