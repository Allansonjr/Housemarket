// TODO Google Auth


// const onGoogleClick = async () => {
// 		try {
// 			const auth = getAuth()
// 			const provider = new GoogleAuthProvider()
// 			const result = await signInWithPopup(auth, provider)
// 			const user = result.user
// 			const docRef = doc(db, 'users', user.uid)
// 			const docSnap = await getDoc(docRef)
// 			if (!docSnap.exists()) {
// 				await setDoc(doc(db, 'users', user.uid), { 
// 				name: user.displayName,
// 				email: user.email,
// 				timestamp: serverTimestamp(),
// 				})
// 			}
// 			toast.success('Google')
// 			navigate('/')
// 		} catch (error) {
// 			toast.error('Error 404')
// 		}
// 	}