# age = 18

# if age < 18:
#     print("You are a minor.")
# elif age <= 18:
#     print("You are just an adult.")


# fruits = ["apple", "banana", "cherry"]
# print(fruits[0])  # Output: banana
# fruits.append("orange")
# print(fruits)  # Output: ['apple', 'banana', 'cherry', '
# fruits.remove("banana")
# print(fruits)  # Output: ['apple', 'cherry', 'orange']

# def greet(name):
#     return f"Hello, {name}!"
# print(greet("Alice"))  # Output: Hello, Alice!

# def add(a, b):
#     return a + b   
# print(add(5, 3))  # Output: 8

# user_info = {
#     "name": "John",
#     "age": 30,
#     "city": "New York"
# }
# print(user_info["name"])  # Output: John

# player = {"name": "Alice", "score": 100, "level": 5}
# player1 = {"name": "bob", "score": 80, "level": 5}
# player2 = {"name": "emi", "score": 70, "level": 5}
# player3 = {"name": "lora", "score": 55, "level": 5}

# def check_rank(p_data):
#     name = p_data["name"]
#     score = p_data["score"]

#     if score >= 100:
#         print(name + " is 'LEGENDARY' rank")
#     elif score >= 80:
#         print(name + " is 'Pro' rank")
#     elif score >= 50:
#         print(name + " is 'Noob' rank")

# for player in [player, player1, player2, player3]:
#     check_rank(player)

# class PLayer:
#     def __init__(self, name, score, level):
#         self.name = name
#         self.score = score
#         self.level = level
#     def check_rank(self):
#         if self.score >= 100:
#             print(f"{self.name} is 'LEGENDARY' rank")
#         elif self.score >= 80:
#             print(f"{self.name} is 'Pro' rank")
#         elif self.score >= 50:
#             print(f"{self.name} is 'Noob' rank")
#         else:
#             return 'Beginner'
# player = PLayer("Alice", 100, 5)
# player1 = PLayer("bob", 80, 5)
# player2 = PLayer("emi", 70, 5)
# player3 = PLayer("lora", 55, 5)
# player1.check_rank()
# player.check_rank()
# player2.check_rank()
# player3.check_rank()


# import random

# def start_game():
#     secret_numbers = random.randint(1, 10)
#     guess = 0   
#     attempts = 0

#     print("--- Number Guessing Game ---")
#     print("Input 1-10 number")

#     while guess != secret_numbers:
#         guess = int(input("Enter your guess: "))
#         attempts += 1

#         if guess < secret_numbers:
#             print("Too low! Try again.")
#         elif guess > secret_numbers:
#             print("Too high! Try again.")
#         else:
#             print(f"Congratulations! You've guessed the number {secret_numbers} in {attempts} attempts.")

# start_game()

age = int(input("Enter your age: "))

try:
    # Энд алдаа гарч болзошгүй кодыг бичнэ
    number = int(input("Тоо оруулна уу: "))
    result = 10 / number
    print(f"Үр дүн: {result}")
except ValueError:
    # Хэрэв тоо биш текст оруулбал энэ хэсэг ажиллана
    print("Алдаа: Та заавал тоо оруулах ёстой!")
except ZeroDivisionError:
    # Хэрэв 0-д хуваах гэж оролдвол энэ хэсэг ажиллана
    print("Алдаа: Тоог 0-д хувааж болохгүй!")
finally:
    # Алдаа гарсан ч, гараагүй ч энэ хэсэг заавал ажиллана
    print("Шалгаж дууслаа.")

def secure_game():
    secret = random.randint(1, 10)
    
    while True:
        try:
            guess = int(input("1-10 хооронд тоо таа: "))
            
            if guess == secret:
                print("Зөв таалаа!")
                break # Тоглоомыг дуусгах
            elif guess < secret:
                print("Бага байна.")
            else:
                print("Их байна.")
                
        except ValueError:
            print("Хөөе! Зөвхөн тоо бичээрэй.")

secure_game()