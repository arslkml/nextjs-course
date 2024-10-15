// Parallel Routes

import Link from 'next/link'
import Card from '@/components/ui/card'
import React from 'react'

export default function Notification() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}
