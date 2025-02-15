import { collection, doc, getDoc, getDocs, query, where, WhereFilterOp, limit, orderBy, addDoc } from "firebase/firestore";
import { db } from "../configs/firebase";

// Lấy tất cả documents từ một collection
export async function getCollection(collectionName: string) {
    try {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error getting collection ${collectionName}:`, error);
        throw error;
    }
}

// Lấy một document cụ thể từ collection dựa trên ID
export async function getDetailCollection(collectionName: string, id: string) {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log(`No document found with id ${id} in collection ${collectionName}`);
            return null;
        }
    } catch (error) {
        console.error(`Error getting document ${id} from ${collectionName}:`, error);
        throw error;
    }
}

// Lấy documents từ collection với điều kiện query
export async function getFilteredCollection(
    collectionName: string, 
    fieldPath: string, 
    opStr: WhereFilterOp, 
    value: any
) {
    try {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where(fieldPath, opStr, value));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error getting filtered collection ${collectionName}:`, error);
        throw error;
    }
}

// Lấy một số lượng documents giới hạn từ collection
export async function getLimitedCollection(collectionName: string, limitCount: number) {
    try {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, limit(limitCount));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error getting limited collection ${collectionName}:`, error);
        throw error;
    }
}


// Lấy ra số lượng item mới nhất trong collection
export async function getLatestItems(collectionName: string, field: string, limitCount: number, tag?: string) {
    try {
        const collectionRef = collection(db, collectionName);

         
        let q;
        if (tag) {
            q = query(
                collectionRef,
                where("tags", "array-contains", tag),
                orderBy(field, "desc"),
                limit(limitCount)
            );
        } else {
            q = query(
                collectionRef,
                orderBy(field, "desc"),
                limit(limitCount)
            );
        }

        // const q = query(
        //     collectionRef,
        //     orderBy(feild, "desc"),
        //     limit(limitCount)
        // );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error getting latest items from ${collectionName}:`, error);
        throw error;
    }
}

export async function getItemsByTags(collectionName: string, tag: string, limitCount?: number) {
    try {
        const collectionRef = collection(db, collectionName);
        let q;
        if(limitCount) {
             q = query(
                collectionRef,
                where("tags", "==", tag),  
                limit(limitCount)
            );
        } else {
            q = query(
                collectionRef,
                where("tags", "==", tag),  
            );
        }
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error getting items by tags from ${collectionName}:`, error);
        throw error;
    }
}


export async function addDocument(collectionName: string, data: any) {
    try {
        const collectionRef = collection(db, collectionName);
        const docRef = await addDoc(collectionRef, data);
        console.log(`Document written with ID: ${docRef.id}`);
        return docRef.id;
    } catch (error) {
        console.error(`Error adding document to ${collectionName}:`, error);
        throw error;
    }
}

export async function getItemsByCategory(
    collectionName: string, 
    category: string, 
    limitCount?: number
) {
    try {
        const collectionRef = collection(db, collectionName);
        const q = query(
            collectionRef,
            where("category", "==", category),
            ...(limitCount ? [limit(limitCount)] : [])
        );
        
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data() 
        }));
    } catch (error) {
        console.error(`Error getting items by category from ${collectionName}:`, error);
        throw error;
    }
}