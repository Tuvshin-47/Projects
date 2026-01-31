import pandas as pd

# # # Файлын зам (Path)
# file_path = r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\product_new.csv"
# # # CSV файл унших
# df = pd.read_csv(r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\product_new.csv")

# # Excel файл унших
# # df = pd.read_excel(r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\excel_analysis_data_new.xlsx")

# # Excel-ийн тусгай хуудас (sheet) сонгож унших
# # df = pd.read_excel(r"C:\Path\To\Your\product.xlsx", sheet_name="user")
# # Датаг уншиж 'df' гэсэн хувьсагчид хадгалах
# df = pd.read_csv(file_path, encoding="utf-8")

# df.head()          # Эхний 5 мөрийг харах
# df.tail()          # Сүүлийн 5 мөрийг харах
# df.info()          # Баганы нэрс, өгөгдлийн төрөл, хоосон утгыг харах
# df.describe()      # Тоон утгуудын статистик (дундаж, мин, макс) харах
# df.columns         # Бүх багануудын нэрийг жагсаалтаар харах


# import pandas as pd
# file_path = r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\user_new.csv"
# df = pd.read_csv(file_path)

# filtered_df = df[
#     (df['gender_str'] == 'male') & (df['age_range'].isin(['18-22', '22-29']))
# ]


# result = filtered_df[[ 'age_range','age_range_code', 'area_str', 'gender_str']]

# # print(result)


import pandas as pd

file_path = r"C:\Users\Dell G15\Desktop\Project\AI-Python\week4\Data_analysis_file\user_new.csv"
df = pd.read_csv(file_path)

# Тоон багануудын ерөнхий статистикийг харах
# print(df.describe())
# df.count()
# df["uid"].count()
# Бүс нутаг бүрт байгаа хэрэглэгчдийн тоог харах
print(df["age_range_code"].min())



