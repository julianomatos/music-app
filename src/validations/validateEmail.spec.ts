import { validateEmail } from "."

it('should validate correctly Email', () => {
    const result = validateEmail('test@example.com')
    expect(result).toBe(true)

    const result2 = validateEmail('test@example')
    expect(result2).toBe(false)

    const result3 = validateEmail('test')
    expect(result3).toBe(false)
})