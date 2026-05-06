#

name = input("Input name: ")
print(name)

#

number_to_double = input("Enter number: ")
doubled = int(number_to_double) + int(number_to_double) #int can be float or str
print(doubled)

#

import math

PI = math.pi
print(math.sin(PI))

#

ICE_CREAM_PRICE = 8
cash_received = input("Input Cash: ")
cash_received = int(cash_received)


if cash_received < ICE_CREAM_PRICE:
    print("we need more cash")

elif cash_received == ICE_CREAM_PRICE:
    print("Enjoy the ice cream!")

else:
    print("Here's some change")


#
for i in range(100, -100, -20):
    print(i)

#

# Topping of Pizza

topping_name = input("what topping would you like?")

if topping_name == "pineapple":
        print("pinapple is $5")

elif topping_name == "sardines":
    print("sardine is $8")

elif topping_name == "pepperoni":
    print("pepperoni is 1 buck")

else:
    print("you dont get shit")
