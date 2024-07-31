import { Progress } from '@chakra-ui/react';
import { useContext } from 'react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerProgress = () => {
	const { currentStep, allShows } = useContext(TSPContext);

	if (!allShows) {
		return null;
	}

	const progress = (currentStep / allShows.length) * 100;
	return <Progress value={progress} />;
};