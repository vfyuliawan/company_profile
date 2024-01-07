import { app } from "@/app/api/firebase";
import { CollectionReference, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export function CrouselViewModel() {
    const [headers, setHeaders] = useState<ResultTextInterfaceData[]>([]);
    const getDataHeader = async () => {
        try {
            const fireStore = getFirestore(app);
            const collectionRef: CollectionReference = collection(
                fireStore,
                "term&condition"
            );
            const querySnapshot = await getDocs(query(collectionRef));
            const res = querySnapshot.docs.map((item) => {
                return {
                    id: item.id,
                    ...item.data(),
                } as unknown as ResultTextInterfaceData;
            });
            if (res !== null) {
                console.log("cehHasil", res);
                setHeaders(res);
            } else {
                alert("no data found");
            }
        } catch (error) {
            console.error("Error fatching", error);
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