# num1 = 10
# num2 = 3
# sum_result = num1 + num2

# addition = num1 = num2
# subtraction = num1 - num2
# multiplication = num1 * num2
# division = num1 / num2
# floor_division = num1 // num2
# modulus = num1 % num2
# exponentiation = num1 ** num2
# print("Addition:", addition)
# print("Subtraction:", subtraction)
# print("Multiplication:", multiplication)
# print("Division:", division)
# print("Floor Division:", floor_division)
# print("Modulus:", modulus)
# print("Exponentiation:", exponentiation)


# num3 = input("Enter a number: ")
# num4 = input("Enter another number: ")
# sum_result = float(num3) + float(num4)
# print("The sum is:", sum_result)    

# print(f"{num1} + {num2} = {sum_result}")
# print(f"{num1} - {num2} = {num1 - num2}")
# print(f"{num1} * {num2} = {num1 * num2}")
# print(f"{num1} / {num2} = {num1 / num2}")
# print(f"{num1} // {num2} = {num1 // num2}")
# print(f"{num1} % {num2} = {num1 % num2}")
# print(f"{num1} ** {num2} = {num1 ** num2}")


num1 = float(input("Эхний тоог оруулна уу: "))
num2 = float(input("Хоёр дахь тоог оруулна уу: "))
# Тооцоолол хийх
sum_result = num1 + num2
difference = num1 - num2
product = num1 * num2
# Тэгээр хуваахаас зайлсхийх
if num2 != 0:
    quotient = num1 / num2
else:
    quotient = "тодорхойгүй (тэгээр хуваах)"
# Үр дүнг харуулах
print(f"\nҮр дүн:")
print(f"{num1} + {num2} = {sum_result}")
print(f"{num1} - {num2} = {difference}")
print(f"{num1} * {num2} = {product}")
print(f"{num1} / {num2} = {quotient}")

