import { app } from "@/app/api/firebase";
import Service from "@/app/services/Service";
import { CollectionReference, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export function CrouselViewModel() {
    const [headers, setHeaders] = useState<ResultTextInterfaceData[]>([]);
    const getDataHeader = async () => {
        const result = (await Service.GET({
            collectionName: "term&condition"
        })) as ResultTextInterfaceData[]
        if (result.length > 0) {
            setHeaders(result)
        }
    };

    useEffect(() => {
        getDataHeader();
        return () => { };
    }, []);

    return {
        headers,
    };
}