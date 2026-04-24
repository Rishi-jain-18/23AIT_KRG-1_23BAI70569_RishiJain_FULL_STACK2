import streamlit as st
import pandas as pd
from model import predict_demand
from inventory import calculate_reorder
from datetime import datetime

st.set_page_config(page_title="Smart Inventory Optimization")

st.title("📦 Smart Inventory Optimization Using AI")

# Load and preprocess data
df = pd.read_csv("sales_data.csv")
df['date'] = pd.to_datetime(df['date'])

# -------------------------
# USER INPUTS
# -------------------------
current_stock = st.slider("Current Stock", 0, 300, 80)
day = st.slider("Day", 1, 31, datetime.now().day)
month = st.slider("Month", 1, 12, datetime.now().month)

# Dynamic graph control
days_to_show = st.slider("Show sales data for last N days", 3, len(df), 7)

# -------------------------
# AI PREDICTION
# -------------------------
predicted_demand = predict_demand(day, month, current_stock)

# Inventory decision
reorder_point, order_qty = calculate_reorder(current_stock, df['sales'])

# -------------------------
# METRICS
# -------------------------
st.metric("Predicted Demand", f"{predicted_demand} units")
st.metric("Reorder Point", int(reorder_point))

if order_qty > 0:
    st.error(f"🚨 Reorder Required: Order {order_qty} units")
else:
    st.success("✅ Stock level is sufficient")

# -------------------------
# DYNAMIC GRAPH
# -------------------------
st.subheader("📈 Dynamic Sales Trend")

filtered_df = df.tail(days_to_show)

chart_data = filtered_df.set_index("date")[["sales"]]
chart_data["Predicted Demand"] = predicted_demand

st.line_chart(chart_data)

# -------------------------
# OPTIONAL: SHOW DATA
# -------------------------
with st.expander("View Filtered Data"):
    st.dataframe(filtered_df)
