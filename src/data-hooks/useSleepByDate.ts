import { AuthInfo } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { FitbitSleepDTO } from "@/types";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

const BASE_URL = process.env.NEXT_PUBLIC_FITBIT_API;

interface FitbitResponse {
  sleep: FitbitSleepDTO[];
}

const useSleepByDate = (
  authState: AuthInfo,
  isoDate: string
): FitbitSleepDTO | undefined => {
  const [sleepByDate, setSleepByDate] = useState<FitbitSleepDTO | undefined>(
    undefined
  );

  useEffect(() => {
    async function get() {
      const body: FitbitResponse | undefined = await fetch(
        `${BASE_URL}/1.2/user/-/sleep/date/${formatToFitbitDate(isoDate)}.json`,
        {
          headers: {
            authorization: "Bearer " + authState.access_token,
          },
        }
      ).then((response) => {
        if (response.status !== 200) {
          return undefined;
        } else {
          return response.json();
        }
      });
      setSleepByDate(body?.sleep[0] ?? undefined);
    }

    get();
  }, [isoDate]);

  return sleepByDate;
};

export default useSleepByDate;
