def calculate_mode(input):
    cache = {}
    final_list = [];
    for item in input:
        if item not in cache:
            cache[item] = 1
        else:
            cache[item] += 1
    
    sorted_cache = dict(sorted(cache.items(), key=lambda x: x[1], reverse = True))
    
    for key in sorted_cache:
        if len(final_list) == 0:
            final_list.append(key)
        elif sorted_cache.get(key) == list(sorted_cache.values())[0]:
            final_list.append(key)

    return final_list