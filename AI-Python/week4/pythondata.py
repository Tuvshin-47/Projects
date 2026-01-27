with open(r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\product_new.csv", encoding="utf-8") as product_file:
    for i, row in enumerate(product_file):
        if i >= 5:
            break
        print(row)