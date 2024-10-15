// Parallel Routes

import Link from 'next/link'
import Card from '@/components/ui/card'
import React from 'react'

export default function ArchivedNotif() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard/">Default</Link>
    </Card>
  )
}
