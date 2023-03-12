import { StringValidator } from "./library-api";

const ZIP_CODE_REGEXP = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && ZIP_CODE_REGEXP.test(s);
    }
}

export {ZipCodeValidator};
export {ZIP_CODE_REGEXP};
