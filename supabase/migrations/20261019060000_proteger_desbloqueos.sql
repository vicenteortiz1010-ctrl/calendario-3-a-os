-- Retirar permisos publicos
REVOKE INSERT, UPDATE, DELETE ON public.desbloqueos FROM anon;
DROP POLICY IF EXISTS "Permitir insertar desbloqueos" ON public.desbloqueos;
DROP POLICY IF EXISTS "Permitir actualizar desbloqueos" ON public.desbloqueos;
DROP POLICY IF EXISTS "Administrador puede actualizar desbloqueos" ON public.desbloqueos;
-- Permitir actualizaciones solo a administradores
CREATE POLICY "Administrador puede actualizar desbloqueos" ON public.desbloqueos FOR UPDATE TO authenticated USING (EXISTS (SELECT 1 FROM public.administradores_calendario WHERE usuario_id = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM public.administradores_calendario WHERE usuario_id = auth.uid()));
GRANT SELECT, UPDATE ON public.desbloqueos TO authenticated;
