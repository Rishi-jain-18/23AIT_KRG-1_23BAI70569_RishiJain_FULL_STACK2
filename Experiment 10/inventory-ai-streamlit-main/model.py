import pandas as pd
from sklearn.ensemble import RandomForestRegressor

df = pd.read_csv("sales_data.csv")
df['date'] = pd.to_datetime(df['date'])

df['day'] = df['date'].dt.day
df['month'] = df['date'].dt.month

X = df[['day', 'month', 'stock']]
y = df['sales']

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X, y)

def predict_demand(day, month, stock):
    return round(model.predict([[day, month, stock]])[0], 2)
