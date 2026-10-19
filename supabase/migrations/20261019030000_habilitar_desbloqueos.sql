GRANT SELECT, INSERT, UPDATE ON public.desbloqueos TO anon;

CREATE POLICY "Permitir insertar desbloqueos"
ON public.desbloqueos
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Permitir actualizar desbloqueos"
ON public.desbloqueos
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);