import { CaesarEncoderService } from "../types/services/CaesarEncoderService";

class CaesarEncoderServiceImpl implements CaesarEncoderService {
  private static DEFAULT_SHIFT = 3;

  encode(originalText: string, shift: number = CaesarEncoderServiceImpl.DEFAULT_SHIFT): string {
    let encodedText = "";

    for (let i = 0; i < originalText.length; i++) {
      const char = originalText[i];
      if (char.match(/[a-z]/i)) {
        const charCode = originalText.charCodeAt(i);
        let shiftedCharCode;

        if (char >= "a" && char <= "z") {
          shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
        } else if (char >= "A" && char <= "Z") {
          shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
        }

        encodedText += String.fromCharCode(shiftedCharCode);
      } else {
        encodedText += char;
      }
    }

    return encodedText;
  }

  decode(encodedText: string, shift: number = CaesarEncoderServiceImpl.DEFAULT_SHIFT): string {
    let originalText = "";

    for (let i = 0; i < encodedText.length; i++) {
      const char = encodedText[i];
      if (char.match(/[a-z]/i)) {
        const charCode = encodedText.charCodeAt(i);
        let shiftedCharCode;

        if (char >= "a" && char <= "z") {
          shiftedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
        } else if (char >= "A" && char <= "Z") {
          shiftedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
        }

        originalText += String.fromCharCode(shiftedCharCode);
      } else {
        originalText += char;
      }
    }

    return originalText;
  }
}

export default function caesarEncoderServiceFactory(): CaesarEncoderService {
  return new CaesarEncoderServiceImpl();
}
