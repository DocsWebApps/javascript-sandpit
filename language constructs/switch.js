// Switch statement - no fall through
var dave='king';
switch(dave) {
	case 'maggot' : console.log('No way');
	break;
	case 'OK': console.log('OK');
	break;
	case 'king': console.log('Yeah bebey!');
	break;
	case 'god': console.log('Sure');
	default: console.log('king anayway');
}

// With fall through, sometimes useful
switch(dave) {
	case 'maggot' : console.log('No way');
	case 'OK': console.log('OK');
	case 'king': console.log('Yeah bebey!');
	case 'god': console.log('Sure');
	default: console.log('king anayway');
}