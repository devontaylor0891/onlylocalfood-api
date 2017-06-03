//this is how the /producers/{id}/schedules response will look.

var get_response = [
	{
		schedulesId: 1,
		schedulesType: 'Door-to-door Delivery',
		schedulesDate: 'July 3',
		schedulesLocation: 'Moosomin',
		startTime: '12 pm',
		endTime: '2 pm',
		schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		DeliveryFee: 10,
		DeliveryFeeWaiver: 45,
	}, {
		schedulesId: 2,
		schedulesType: 'Off-farm Pickup',
		schedulesDate: 'July 4',
		schedulesLocation: 'Wapella',
		startTime: '12 pm',
		endTime: '2 pm',
		schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		DeliveryFee: null,
		DeliveryFeeWaiver: null,
	}, {
		schedulesId: 3,
		schedulesType: 'Scheduled Farmgate Pickup',
		schedulesDate: 'July 5',
		schedulesLocation: 'Virden',
		startTime: '12 pm',
		endTime: '2 pm',
		schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		DeliveryFee: null,
		DeliveryFeeWaiver: null,
	}
];
