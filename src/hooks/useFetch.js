import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const useSupabase = () => {
  const [list, setList] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getList = async () => {
      setIsPending(true);
      const { data, error } = await supabase.from("Products").select();

      if (error) {
        setError("Couldn't fetch store");
        console.log(error);
        setIsPending(false);
      }
      if (data) {
        setList(data);
        setError(null);
        console.log(data);
        setIsPending(false);
      }
    };
    getList();
  }, []);
  return { list, error, isPending };
};

export default useSupabase;
