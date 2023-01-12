import React, { useState, Fragment } from 'react';
import PropType from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/react/24/solid';
import { TagIcon } from '@heroicons/react/24/outline';
import moment from 'moment';

const ReservationDetail = ({
  title, pickupDate, returnDate, model,
}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const formatDate = (date) => moment(date).format('ddd, MMM Do, YYYY');
  return (
    <>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)}>{title}</AccordionHeader>
        <AccordionBody>
          <ul className="list-outside list-disc">
            <li className="flex gap-1 items-center">
              <TagIcon className="w-7 stroke-amber-600" />
              <span>{model}</span>
            </li>
            <li className="flex gap-1 items-center">
              <BookmarkIcon className="w-7 fill-blue-gray-600" />
              <span>{formatDate(pickupDate)}</span>
            </li>
            <li className="flex gap-1 items-center">
              <BookmarkSlashIcon className="w-7 fill-red-500" />
              <span>{formatDate(returnDate)}</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
};

ReservationDetail.propTypes = {
  title: PropType.string.isRequired,
  model: PropType.string.isRequired,
  pickupDate: PropType.string.isRequired,
  returnDate: PropType.string.isRequired,
};
export default ReservationDetail;
