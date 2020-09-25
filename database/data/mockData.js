var sampleData = {
  listings: [
    {
      id: 1,
      base_price: 100,
      surge_price: 150,
      guest_policies: {}
    },
    {
      id: 2,
      base_price: 55,
      surge_price: 85,
      guest_policies: {}
    },
  ],
  reservations: [
    {
      id: 10000
      res_start: '2020-10-15'
      res_end: '2020-10-17'
      listing_id: 1,
      reservation_price: 200,
      tax: 40
      service_fee: 25
      adults_count: 2,
      children_count: 3,
      infants_count: 1
    },
    {
      id: 10001
      res_start: '2020-10-19'
      res_end: '2020-10-20'
      listing_id: 1,
      reservation_price: 100,
      tax: 20
      service_fee: 12.5
      adults_count: 2,
      children_count: 0,
      infants_count: 0
    },
    {
      id: 10002
      res_start: '2020-10-14'
      res_end: '2020-10-19'
      listing_id: 1,
      reservation_price: 200,
      tax: 40
      service_fee: 25
      adults_count: 2,
      children_count: 3,
      infants_count: 1
    }
  ],
  dates: [
    {
      id: 100,
      date_value: '2020-10-14',
      is_surge: false
    },
    {
      id: 101,
      date_value: '2020-10-15',
      is_surge: false
    },
    {
      id: 102,
      date_value: '2020-10-16',
      is_surge: false
    },
    {
      id: 103,
      date_value: '2020-10-17',
      is_surge: false
    },
    {
      id: 104,
      date_value: '2020-10-18',
      is_surge: false
    },
    {
      id: 105,
      date_value: '2020-10-19',
      is_surge: false
    },
    {
      id: 106,
      date_value: '2020-10-20',
      is_surge: false
    },
    {
      id: 107,
      date_value: '2020-10-21',
      is_surge: false
    }
  ],
  booked_dates: [
    {
      id = 1000,
      date_id: 101,
      date_value: '2020-10-15'
      listing_id: 1,
      res_id: 10000,
      is_surge: false
    },
    {
      id: 1001,
      date_id: 102,
      date_value: '2020-10-16',
      listing_id: 1,
      res_id: 10000,
      is_surge: false
    },
    {
      id: 1002,
      date_id: 105,
      date_value: '2020-10-19',
      listing_id: 1,
      res_id: 10001,
      is_surge: false
    },
    {
      id: 1003,
      date_id: 106,
      date_value: '2020-10-20',
      listing_id: 1,
      res_id: 10001,
      is_surge: false
    },
    {
      id: 1004,
      date_id: 100,
      date_value: '2020-10-14',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    },
    {
      id: 1005,
      date_id: 101,
      date_value: '2020-10-15',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    },
    {
      id: 1006,
      date_id: 102,
      date_value: '2020-10-16',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    },
    {
      id: 1007,
      date_id: 103,
      date_value: '2020-10-17',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    },
    {
      id: 1008,
      date_id: 104,
      date_value: '2020-10-18',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    },
    {
      id: 1009,
      date_id: 105,
      date_value: '2020-10-19',
      listing_id: 2,
      res_id: 10002,
      is_surge: false
    }
  ]
}