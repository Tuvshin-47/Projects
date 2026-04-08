# python
def grade(score):
    ret = ''
    if score >= 80 and score <= 100:
        ret = 'D'
    elif score < 80 and score >= 50:
        ret = 'P'
    else:
        ret = 'F'
    return ret

print(grade(80));