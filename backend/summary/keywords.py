import random

def generate_keywords():
    keylist = ["constrain", "make", "offer", "bid", "normative",
               "trade", "economics", "consumers", "wage", "auction",
               "demand", "supply", "just", "economics", "now",
               "curve", "like", "price", "water", "roses"]
    ret = []
    for i in range(5):
        ret.append(keylist[random.randint(0,9)])
    return ret

