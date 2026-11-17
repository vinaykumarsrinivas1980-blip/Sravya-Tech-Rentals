import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <div style={{ height: 140, background: '#f7f7f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Image</span>
      </div>
      <h3>{product.name}</h3>
      <p style={{ margin: 0 }}>{product.brand}</p>
      <p style={{ margin: 0 }}>Custom Quote on Request</p>
      <Link href={`/products/${product._id || product.id}`}><button style={{ marginTop: 8 }}>View</button></Link>
    </div>
  )
}
