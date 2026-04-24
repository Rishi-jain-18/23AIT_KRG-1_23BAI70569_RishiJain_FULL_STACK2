import numpy as np

def calculate_reorder(current_stock, sales_history, lead_time=5):
    avg_demand = np.mean(sales_history)
    std_demand = np.std(sales_history)

    safety_stock = 1.65 * std_demand * np.sqrt(lead_time)
    reorder_point = (avg_demand * lead_time) + safety_stock

    if current_stock <= reorder_point:
        order_quantity = int(avg_demand * lead_time)
        return reorder_point, order_quantity
    else:
        return reorder_point, 0
