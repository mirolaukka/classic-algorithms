from datetime import datetime
startTime = datetime.now()



for n in range(101):
    o=n if n%3!=0 and n%5!=0 else ""
    if n%3==0:o+="Fizz"
    if n%5==0:o+="Buzz"
    print(o)

print(datetime.now() - startTime)
