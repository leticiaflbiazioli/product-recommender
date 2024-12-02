import { clearText } from './clearText';

describe('clearText', () => {
  it('should return the same text when no special characters or accents are present', () => {
    const input = 'TextoSimples';
    const result = clearText(input);
    expect(result).toBe('textosimples');
  });

  it('should remove accents from the text', () => {
    const input = 'Texto com acentuação';
    const result = clearText(input);
    expect(result).toBe('textocomacentuacao');
  });

  it('should remove special characters from the text', () => {
    const input = 'Texto com !@#$%&*';
    const result = clearText(input);
    expect(result).toBe('textocom');
  });

  it('should return an empty string when given an empty string', () => {
    const input = '';
    const result = clearText(input);
    expect(result).toBe('');
  });

  it('should convert the text to lowercase', () => {
    const input = 'Texto COM LETRAS MAIÚSCULAS';
    const result = clearText(input);
    expect(result).toBe('textocomletrasmaiusculas');
  });
});
