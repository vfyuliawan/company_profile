import { app } from "@/app/api/firebase";
import { CollectionReference, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export function CrouselViewModel() {
    const [headers, setHeaders] = useState<ResultInterfaceData[]>([]);
    const getDataHeader = async () => {
        try {
            const fireStore = getFirestore(app);
            const collectionRef: CollectionReference = collection(
                fireStore,
                "headers"
            );
            const querySnapshot = await getDocs(query(collectionRef));
            const res = querySnapshot.docs.map((item) => {
                return {
                    id: item.id,
                    ...item.data(),
                } as ResultInterfaceData;
            });
            if (res !== null) {
                console.log("hasil", res);
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