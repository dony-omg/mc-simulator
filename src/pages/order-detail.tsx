import OrderDetail from '../components/module/Order/Detail';
import { useFetch } from '../hooks/useFetch';

export default function OrderDetailPage() {
    // /api/v1/merchants/:simulator_merchant_code/orders/:m_order_id
    const { data } = useFetch("/merchants?page_id=1&per_page=100", {
        method: 'GET',
        redirect: 'follow'
    });
    console.log(data);
    return (
        <div>
            <OrderDetail />
        </div>
    )
}
