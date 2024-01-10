class Animal:
    def __init__(self, age):
        self.isAlive = True
        self.age = age

    def breath(self):
        print("breathing")
        
    def getInfo(self):
        print(f'Age is: {self.age}')

class Dog(Animal):
    def __init__(self, age, color):
        super().__init__(age)
        self.color = color

    def walking(self):
        print("walking")

    def getInfo(self):
        
        print(f'Color is: {self.color}')
a = Animal(18)
print(a.isAlive)
a.breath()
a.breath()
a.getInfo()
d = Dog(3,"black")
d.getInfo()
d.breath()

a = 5

if a > 5 :
    pass

if a < 5:
    pass
elif a < 5:
    pass
elif a < 5:
    pass
elif a < 5:
    pass

try:
    a = int(input())
except:
    # Code to handle the exception
    print("An exception occurred.")
else:
    print(a)
finally:
    print(1233)

def xui (a: str):
    return a